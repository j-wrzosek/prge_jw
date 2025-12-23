from fastapi import APIRouter
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password

router = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

@router.post("/insert_user")
async def insert_user():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        params = {
            "name": "Gaweł",
            "posts":13,
            "location": "Łódź"
        }

        sql_query = text("""
                         insert into users (name, posts, location)
                         values (:name, :posts, :location); 
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)


    except Exception as e:
        print(e)
        raise e


    return {"status": 1}
