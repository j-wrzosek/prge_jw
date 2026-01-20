from fastapi import APIRouter
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password

router_get_parks = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


@router_get_parks.get("/get_parks")
async def get_parks():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql_query = text("""select * 
                            from park""")

        with db_connection.connect() as con:
            results = con.execute(sql_query)
            users = [dict(row._mapping) for row in results]

        return {'status': 'succes', 'data':users}

    except Exception as e:
        print(f'błąd podczas get_parks')
        return {'error': str(e)}

















    return {"imie":"Adrian"}
