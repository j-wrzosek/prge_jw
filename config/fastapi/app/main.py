from fastapi import FastAPI
from app.routers.static_content import router as static_router
from app.routers.db_insert import router as insert_router
from app.routers.dynamic_content import router_get_parks
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mapbook API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




app.include_router(static_router, prefix="/app")
app.include_router(insert_router, prefix="/app")
app.include_router(router_get_parks, prefix="/app")