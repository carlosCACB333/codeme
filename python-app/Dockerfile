
FROM python:3.12 as base
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
RUN pip install --upgrade pip


FROM base as development
WORKDIR /app
ENV STAGE=development
RUN pip install watchdog[watchmedo]
RUN pip install grpcio-tools==1.59.3
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD [ "watchmedo", "auto-restart", "--recursive", "--pattern=*.py", "--", "python", "-u", "main.py"]

FROM base as production
WORKDIR /app
ENV STAGE=production
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD [ "python", "-u", "main.py"]
