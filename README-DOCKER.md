# Docker Deployment Guide

## 📦 Files Created
- `Dockerfile` - Docker image configuration
- `docker-compose.yml` - Docker compose configuration
- `nginx.conf` - Custom Nginx configuration
- `.dockerignore` - Files to exclude from Docker build

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)
```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker Commands
```bash
# Build the image
docker build -t portfolio-website .

# Run the container
docker run -d -p 8080:80 --name portfolio portfolio-website

# View logs
docker logs -f portfolio

# Stop and remove container
docker stop portfolio
docker rm portfolio
```

## 🌐 Access Your Portfolio
After starting the container, access your portfolio at:
- **Local**: http://localhost:8080
- **Network**: http://YOUR_IP:8080

## 🛠️ Docker Commands Cheat Sheet

### Build & Run
```bash
docker-compose up -d --build    # Rebuild and start
docker-compose restart          # Restart services
docker-compose ps              # View running containers
```

### Logs & Debug
```bash
docker-compose logs            # View all logs
docker-compose logs portfolio  # View specific service logs
docker exec -it portfolio-website sh  # Enter container shell
```

### Clean Up
```bash
docker-compose down            # Stop and remove containers
docker-compose down -v         # Stop and remove with volumes
docker system prune -a         # Remove all unused images
```

## 📝 Configuration

### Change Port
Edit `docker-compose.yml`:
```yaml
ports:
  - "3000:80"  # Change 3000 to your preferred port
```

### Nginx Customization
Edit `nginx.conf` to customize:
- Cache settings
- Gzip compression
- Security headers
- URL rewrites

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Check what's using port 8080
netstat -ano | findstr :8080  # Windows
lsof -i :8080                 # Linux/Mac

# Use different port in docker-compose.yml
```

### Container Won't Start
```bash
# Check logs
docker-compose logs

# Check container status
docker-compose ps

# Rebuild from scratch
docker-compose down
docker-compose up -d --build
```

### Permission Issues
```bash
# On Linux, run with sudo
sudo docker-compose up -d
```

## 🚢 Deploy to Production

### Push to Docker Hub
```bash
# Tag your image
docker tag portfolio-website yourusername/portfolio:latest

# Push to Docker Hub
docker push yourusername/portfolio:latest
```

### Deploy to Cloud
- **Google Cloud Run**: `gcloud run deploy`
- **AWS ECS**: Use AWS ECR and ECS
- **Heroku**: Use Heroku Container Registry
- **DigitalOcean**: Use App Platform or Droplet

## 📊 Resource Usage
- **Image Size**: ~25MB (nginx:alpine base)
- **Memory**: ~10MB runtime
- **CPU**: Minimal (static site)

## 🔐 Security
- Running as non-root user (nginx)
- Security headers enabled in nginx.conf
- No exposed credentials
- Alpine Linux base (minimal attack surface)

## 💡 Tips
1. Always use `docker-compose` for easier management
2. Check logs regularly: `docker-compose logs -f`
3. Use `docker-compose down` before rebuilding
4. Keep your base image updated: `docker pull nginx:alpine`
5. Use `.dockerignore` to reduce image size

## 📚 Learn More
- Docker Docs: https://docs.docker.com
- Nginx Docs: https://nginx.org/en/docs
- Docker Hub: https://hub.docker.com
