from fastapi import FastAPI
from app.routers.static_content import router as static_router
from app.routers.db_insert import router as insert_router


app = FastAPI(title="Mapbook API")

app.include_router(static_router, prefix="/app")
app.include_router(insert_router, prefix="/app")