#!/usr/bin/env python3
"""Measure runtime of async comprehension"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """ async_comprehension four times in parallel and measure the total runtime """
    start_time = time.time()

    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    
    end_time = time.time()

    return end_time - start_time
