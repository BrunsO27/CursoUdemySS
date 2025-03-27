# Curso Udemy

Este es el repositorio destinado para llevar los proyectos de los cursos indicados para la capacitacion;
para poder realizar de manera optima el Servicio Social en la Secretaria de Paneacion e Infotmatica, 
Facultad de Quimica, UNAM.

## Consideraciones Importatnes

Estos proyectyos se desarrollaron de manera paralela en en equipo con las tecnologias requeridas instaladas
de manera nativa y en contenedores de Docker para evitar instalaciones en otros equipos de computo.

Trabajando en un equipo con las tecnologias instaladas, algunas bibliotecas discrepan con las que estan 
instaladas en los contenedores, como la bcrypt y bcryptjs.

## Tecnologias Usadas

1. Node.js version 18 y 16.
2. NPM
3. NVM 
4. MySQL
5. PhpMyAdmin
6. Vue
7. Vite

## 🐳 Comandos para Docker y Docker Compose de NODE

### 🔹 1. Construir los contenedores  
| Acción | Comando |
|--------|---------|
| Construir imagen desde Dockerfile | `docker build -t curso-node .` |
| Construir servicios con Docker Compose | `docker-compose build` |

### 🔹 2. Levantar los contenedores  
| Acción | Comando |
|--------|---------|
| Iniciar servicios con Docker Compose | `docker-compose up -d` |
| Ejecutar un contenedor manualmente | `docker run -d -p puertosHost:puertosContenedor --name curso-node curso-node` |

### 🔹 3. Bajar los contenedores  
| Acción | Comando |
|--------|---------|
| Parar los servicios con Docker Compose | `docker-compose down` |
| Parar los servicios con Docker Compose eliminando los volumenes creados | `docker-compose down -v` |

### 🔹 4. Verificar los contenedores  
| Acción | Comando |
|--------|---------|
| Ver contenedores en ejecución | `docker ps` |
| Ver todos los contenedores (incluidos los detenidos) | `docker ps -a` |

### 🔹 5. Acceder al contenedor  
| Acción | Comando |
|--------|---------|
| Abrir terminal dentro del contenedor curso-node | `docker exec -it curso-node bash` |
| Abrir terminal dentro del contenedor mysql | `docker exec -it mysql bash` |

### 🔹 6. Ver logs del contenedor  
| Acción | Comando |
|--------|---------|
| Ver logs en tiempo real | `docker logs -f <nombre del contenedor>` |
| Ver logs de todos los servicios con Docker Compose | `docker-compose logs -f` |

### 🔹 7. Detener y eliminar contenedores  
| Acción | Comando |
|--------|---------|
| Detener un contenedor | `docker stop <nombre del contenedor>` |
| Detener todos los contenedores | `docker stop $(docker ps -q)` |
| Eliminar un contenedor | `docker rm <nombre del contenedor>` |
| Eliminar todos los contenedores detenidos | `docker container prune -f` |

### 🔹 8. Eliminar imágenes y volúmenes  
| Acción | Comando |
|--------|---------|
| Eliminar una imagen | `docker rmi <nombre de la imagen>` |
| Eliminar todas las imágenes | `docker rmi $(docker images -q)` |
| Eliminar volúmenes no utilizados | `docker volume prune -f` |

### 🔹 9. Reiniciar todo el entorno  
| Acción | Comando |
|--------|---------|
| Eliminar todos los contenedores, imágenes y volúmenes | `docker system prune -a --volumes -f` |


## 🐳 Comandos para Docker y Docker Compose de NODE
### 🔹 1. Construir los contenedores  
| Acción | Comando |
|--------|---------|
| Construir imagen desde Dockerfile | `docker build -t curso-vue .` |
| Construir servicios con Docker Compose | `docker-compose build` |

### 🔹 2. Levantar los contenedores  
| Acción | Comando |
|--------|---------|
| Iniciar servicios con Docker Compose | `docker-compose up -d` |
| Ejecutar un contenedor manualmente | `docker run -d -p puertosHost:puertosContenedor --name curso-vue curso-vue` |

### 🔹 3. Bajar los contenedores  
| Acción | Comando |
|--------|---------|
| Parar los servicios con Docker Compose | `docker-compose down` |
| Parar los servicios con Docker Compose eliminando los volumenes creados | `docker-compose down -v` |

### 🔹 4. Verificar los contenedores  
| Acción | Comando |
|--------|---------|
| Ver contenedores en ejecución | `docker ps` |
| Ver todos los contenedores (incluidos los detenidos) | `docker ps -a` |

### 🔹 5. Acceder al contenedor  
| Acción | Comando |
|--------|---------|
| Abrir terminal dentro del contenedor curso-node | `docker exec -it curso-vue bash` |

### 🔹 6. Ver logs del contenedor  
| Acción | Comando |
|--------|---------|
| Ver logs en tiempo real | `docker logs -f <nombre del contenedor>` |
| Ver logs de todos los servicios con Docker Compose | `docker-compose logs -f` |

### 🔹 7. Detener y eliminar contenedores  
| Acción | Comando |
|--------|---------|
| Detener un contenedor | `docker stop <nombre del contenedor>` |
| Detener todos los contenedores | `docker stop $(docker ps -q)` |
| Eliminar un contenedor | `docker rm <nombre del contenedor>` |
| Eliminar todos los contenedores detenidos | `docker container prune -f` |

### 🔹 8. Eliminar imágenes y volúmenes  
| Acción | Comando |
|--------|---------|
| Eliminar una imagen | `docker rmi <nombre de la imagen>` |
| Eliminar todas las imágenes | `docker rmi $(docker images -q)` |
| Eliminar volúmenes no utilizados | `docker volume prune -f` |


## Acceder a las paginas de los proyectos

1. Con el comando correpondiente a tu sistema, muevete al directorio del proyecto deseado.
2. En el directorio del proyecto deseado, ejecuta el siguiente comando:
    `npm install`
3. Para levantar la pagina:
    * En un sistema con las teconologias instaladas, ejecuta el siguiente comando:
    `npm run dev`
    * En un contenedor de docker:
    `npm run dev -- --host --port=5173` 