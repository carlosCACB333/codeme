# MICROSERVICIO NODE-RUST-PYTHON

# requisitos

## sistema

- git
- docker y docker compose
- vscode
- postman

## extensiones de vscode

- Remote Development, Docker (para los contenedores)
- Python, Pylance, Black Formatter (para desarrollar en python)
- ESLint, Prettier - Code formatter,ES7+ React/Redux/React-Native snippets (para el front con nextjs)
- rust, rust-analyzer (para rust)
- SQLTools (para sql)
- vscode-proto3 (para los protobuffers)
- Go, Go Nightly (para desarrollar en go)

> solo es indispensable las extensiones para los contenedores. Instala solo los que necesitas si lo deseas.

# PASOS PARA EJECUTAR EL PROYECTO

1. Clonar el repositorio

```bash
git clone <repo>
```

2. Navega al proyecto

```bash
cd <project>
```

3. Renombra el `.env.template` a solo `.env`
   - puedes cambiar las variables de entorno a tu conveniencia. Para ejecución local los puedes dejar tal cual.
4. Ejectuta el proyecto

   - **Desarrollo:** ejecuta ,`docker compose up` o si solo quieres ejecutar un servicio puedes ejecutar `docker compose up <nombre del servicio en el archivo compose>`

   - **Desarrollo:** ejecuta ,`docker compose -f compose.prod.yml up`

   - Puede que en versiones anteriores de docker necesites ejecutar el comando `docker-compose` por `docker compose` y ademas cambiar el archivo `compose.yml` a `docker-compose.yml`(o indicarlo con el flag -f el nombre del archivo)

# EMPIEZA A DESARROLLAR

- Necesitar tener instalado las extensiones `Remote Development`
- Necesitas que tus contenedores esten en ejecución
- Ejecuta `clt + shit + p` y escribir _Attach to Running Container_
- Selecciona el contenedor en la que quieras trabajar. Se habrirá otra ventana de vscode totamente limpia. Necesitaras instalar aquí tus extensiones para desarrollar(en el apartado anterior tienes toda las extensiones recomendadas)
- Ya puedes desarrollar.

# PRUEBA TUS SERVICOS CON POSTMAN

- Necesitar ver un tutorial de como probar tus servicios grpc con postman.

# CONTRUYE TUS SERVICIOS

- Entra dentro del contenedor en la que quieres implementar un servicio.
- Dentro de la carpeta protos puedes empezar creando un archivo `.proto` y empieza a definir los mensages y los servicios.
- Ahora puedes generar codigo.
  - En el front usa `yarn proto`
  - En python usa `make proto`.
  - En Go usa `make proto`.
  - En rust solo necesitas agregar dicho archivo en `build.rs`
- Luego necesitar implementar los servicios que has definido.

# CREACIÓN DE CONTENEDORES DINÁMICOS

> Para ejecutar codigo enviado del front necesitamos crear contenedores dinámicamente para no comprometer el servidor.

- Dependiendo de tu sistema operativo necesitas editar el `compose.yml` y agregar la ubicacion de tu socket de docker en el volumen del servicio de rust-app que luce así: `- /run/docker.sock:/var/run/docker.sock`. solo cambia la parte izquierda del `:`.
- Como la creación de la imagen es pesada e impacta negativamente en la experiencia de usuario deberas tener las imágenes ya descargadas. para ello puedes usar:
  - `docker pull python:3.12`
