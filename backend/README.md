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
uvicorn src.api:app --reload
```