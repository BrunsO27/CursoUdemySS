# Usa una imagen base de Ubuntu
FROM ubuntu:latest

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    curl \
    bash \
    inotify-tools \
    tree \
    git \
    build-essential

COPY . /app

# Instalar Node Version Manager (NVM)
ENV NVM_DIR /root/.nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Instalar Node.js y npm usando NVM
RUN bash -c "source /root/.nvm/nvm.sh && nvm install 16 && nvm alias default 16"

# Configurar el PATH para que Node.js y npm estén disponibles globalmente
ENV PATH="/root/.nvm/versions/node/v16.20.2/bin:$PATH"

# Corregir permisos del binario de Node.js
RUN chmod +x /root/.nvm/versions/node/v16.20.2/bin/node

# Instalar nodemon globalmente
RUN npm install -g nodemon

# Crear un directorio de trabajo genérico
WORKDIR /app

# Comando predeterminado para iniciar una sesión interactiva
CMD ["bash"]