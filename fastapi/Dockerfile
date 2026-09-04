# pull official base image
FROM python:3.13

# set work directory
WORKDIR /usr/src/fastapi

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# netcat is used by entrypoint.sh to wait for postgres
RUN apt-get update \
    && apt-get install -y --no-install-recommends netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

RUN sed -i 's/\r$//g' entrypoint.sh && chmod +x entrypoint.sh

ENTRYPOINT ["sh", "entrypoint.sh"]
