# pull official base image
FROM python:3.13.12-slim-bookworm

# set work directory
WORKDIR /usr/src/api

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && apt-get install -y netcat-openbsd

# install dependencies
RUN pip install --upgrade pip
# use development requirements explicitly
# copy the entire requirements directory so included files (like base.txt) are available
COPY ./requirements ./requirements
RUN pip install -r requirements/dev.txt

# copy entrypoint.sh
COPY --chmod=755 ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/api/entrypoint.sh
RUN chmod +x /usr/src/api/entrypoint.sh

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/usr/src/api/entrypoint.sh"]