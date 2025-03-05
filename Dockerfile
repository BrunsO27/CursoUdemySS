FROM ubuntu:latest

# Instalar dependencias necesarias
RUN apt-get update && apt-get install -y \
    curl \
    bash \
    inotify-tools \
    tree

# Instalar NVM
ENV NVM_DIR /root/.nvm
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash

# Cargar NVM y establecer una versión predeterminada de Node.js
RUN bash -c "source /root/.nvm/nvm.sh && nvm install 16 && nvm install 18 && nvm use 18"

# Crear directorio de la aplicación
WORKDIR /app

# Comando para vigilar cambios en los archivos y ejecutarlos automáticamente
CMD ["/bin/bash"]