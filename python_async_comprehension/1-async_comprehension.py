#!/usr/bin/env python3
"""async comprehension task 1"""
import asyncio
from typing import List
from . import async_generator

async def async_comprehension() -> List[float]:
    """Collects 10 random numbers from async_generator using async comprehension"""
    return [i async for i in async_generator()]
