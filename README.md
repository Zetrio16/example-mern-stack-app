This repo contains a 'docker-compose.yml' file that allows you to simply run:

```

docker compose up -d

```

back end is available at http://localhost/4000 and the front end is at http://localhost/3000.


When you are done, simply run:

```

docker compose down 

```


## Deploying

To deploy the application, you will need to do the following:

1. Build the frontend.

    ```
    cd frontend
    yarn build
    ```

1. Copy the artifacts from the newly created/populated `frontend/build` directory into `backend/src/static` directory.

1. Deploy the `backend` directory and start it using `node src/index.js`. The frontend application will be deployed using the backend.
