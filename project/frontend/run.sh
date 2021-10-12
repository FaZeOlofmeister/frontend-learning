#!/bin/bash
export PASSWORD="291131sam"
nohup yarn start > running.log 2>&1 &
echo $! > save_pid.txt

