#!/usr/bin/env python3
"""measure runtime for parallel execution"""
import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
""" run async_comprehension four times in parallel and measure time taken """
    start_time = time.time()
    
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    
    end_time = time.time()

    return end_time - start_time
