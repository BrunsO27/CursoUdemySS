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

## 🐳 Comandos para Docker y Docker Compose

### 🔹 1. Construir los contenedores  
| Acción | Comando |
|--------|---------|
| Construir imagen desde Dockerfile | `docker build -t mi-app .` |
| Construir servicios con Docker Compose | `docker-compose build` |

### 🔹 2. Levantar los contenedores  
| Acción | Comando |
|--------|---------|
| Iniciar servicios con Docker Compose | `docker-compose up -d` |
| Ejecutar un contenedor manualmente | `docker run -d -p puertosHost:puertosContenedor --name mi-app mi-app` |

### 🔹 3. Verificar los contenedores  
| Acción | Comando |
|--------|---------|
| Ver contenedores en ejecución | `docker ps` |
| Ver todos los contenedores (incluidos los detenidos) | `docker ps -a` |

### 🔹 4. Acceder al contenedor  
| Acción | Comando |
|--------|---------|
| Abrir terminal dentro del contenedor | `docker exec -it mi-app bash` |

### 🔹 5. Ver logs del contenedor  
| Acción | Comando |
|--------|---------|
| Ver logs en tiempo real | `docker logs -f mi-app` |
| Ver logs de todos los servicios con Docker Compose | `docker-compose logs -f` |

### 🔹 6. Detener y eliminar contenedores  
| Acción | Comando |
|--------|---------|
| Detener un contenedor | `docker stop mi-app` |
| Detener todos los contenedores | `docker stop $(docker ps -q)` |
| Eliminar un contenedor | `docker rm mi-app` |
| Eliminar todos los contenedores detenidos | `docker container prune -f` |

### 🔹 7. Eliminar imágenes y volúmenes  
| Acción | Comando |
|--------|---------|
| Eliminar una imagen | `docker rmi mi-app` |
| Eliminar todas las imágenes | `docker rmi $(docker images -q)` |
| Eliminar volúmenes no utilizados | `docker volume prune -f` |

### 🔹 8. Reiniciar todo el entorno  
| Acción | Comando |
|--------|---------|
| Eliminar todos los contenedores, imágenes y volúmenes | `docker system prune -a --volumes -f` |


