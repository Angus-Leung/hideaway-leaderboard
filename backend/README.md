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
redis-server
uvicorn src.api:app --reload
(Optional to check contents in redis) redis-cli
```

## Deployment Steps
```

```