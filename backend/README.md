# hideaway-leaderboard

## Install dependancies:
```
pip install -r requirements.txt
```

## Install Redis:
```
sudo apt-get install redis # windows
brew install redis # mac
```

## Run Locally
```
sudo service redis-server start 
cd backend 
uvicorn src.api:app --reload
```