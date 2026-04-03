from fastapi import APIRouter

router = APIRouter(prefix="/customer", tags=["customer"])

@router.get("/profile")
async def get_profile():
    return {"id": 1, "name": "Customer user", "email": "customer@example.com"}
