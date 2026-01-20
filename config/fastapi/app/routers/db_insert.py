from fastapi import APIRouter
from sqlalchemy import create_engine, text
from pydantic import BaseModel
import requests
from urllib.parse import quote
import time

from app.settings import db_name, db_user, db_password

router = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


def get_coords(location:str):

        location_encoded = quote(location)
        url: str = f'https://nominatim.openstreetmap.org/search?q={location_encoded},Poland&format=json&limit=1&addressdetails=1'
        headers = {
            'User-Agent': 'ParkGeoportal/1.0 (https://github.com/j-wrzosekprge_jw; contact: 123456@gmail.com)',
            'Accept': 'application/json',
            'Accept-Language': 'pl,en'
        }

        time.sleep(4)
        response = requests.get(url, headers=headers, timeout=5)
        data = response.json()
        if data:
            lat = data[0].get('lat')
            lon = data[0].get('lon')
            return float(lat), float(lon)
        else:
            return None, None

class ParkData(BaseModel):
    name: str
    rating: int
    city: str




@router.post("/insert_park")
async def insert_park(park: ParkData):
    try:

        lat, lon = get_coords(park.name)

        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        params = {
            "name": park.name,
            "rating": park.rating,
            "city": park.city,
            "coordinates": f"SRID=4326;POINT({lon} {lat})"
        }

        sql_query = text("""
                         insert into park (name, rating, city, geom)
                         values (:name, :rating, :city, ST_GeomFromText(:coordinates, 4326)); 
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)


    except Exception as e:
        print(e)
        raise e


    return {"status": 1}
