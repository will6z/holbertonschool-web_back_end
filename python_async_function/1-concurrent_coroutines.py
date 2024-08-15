#!/usr/bin/env python3
""" spawns multiple `wait_random coroutines and returns their delays in ascending order """

import asyncio
from typing import List
from wait_random import wait_random

async def wait_n(n: int, max_delay: int) -> List[float]:
    """ returns a list """
    delays = []
    tasks = [wait_random(max_delay) for _ in range(n)]
    
    for delay in await asyncio.gather(*tasks):
        delays.append(delay)

    return delays
