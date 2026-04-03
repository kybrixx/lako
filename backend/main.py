from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from api.routes.customer.profile import router as customer_profile_router
from api.routes.vendor.profile import router as vendor_profile_router

app = FastAPI(title="Lako Minimal Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"]
    ,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(customer_profile_router)
app.include_router(vendor_profile_router)

class HealthResponse(BaseModel):
    status: str
    message: str

@app.get("/health", response_model=HealthResponse)
async def health():
    """Simple health check."""
    return {"status": "ok", "message": "Lako backend is running"}

class EchoRequest(BaseModel):
    text: str

@app.post("/echo")
async def echo(payload: EchoRequest):
    """Echo endpoint for quick testing."""
    return {"text": payload.text}
