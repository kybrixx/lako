from fastapi import APIRouter

router = APIRouter(prefix="/vendor", tags=["vendor"])

@router.get("/profile")
async def get_profile():
    return {"id": 1, "name": "Vendor user", "email": "vendor@example.com"}
