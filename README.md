# Media Party 2018 :: Herramientas de IA para Redacciones Modernas
Es un repaso por una suite de herramientas que resuelven problemas puntuales en las redacciones. Y que deben estar en el botiquín de todo desarrollador.

## Como correr el proyecto

Previo a esto hay que crearse una cuenta en Google Cloud, o usar una yá existente. Ir al administrador de Credenciales (IAM) y crear un archivo de acceso remoto con permiso para acceder a las apis de Vision y Natural Language



### Frontend

```
    $> cd frontend 
    
    $> npm install
    
    $> npm start
        
```

### Backend

Para setear el archivo de credenciales generado, editar el package.json

```
    ...
    
    "start": "GOOGLE_APPLICATION_CREDENTIALS=/FULL/PATH/AL/ARCHIVO/DE/CREDENCIALES/proyecto-algoalfanumerico.json node server.js",
    
    ...
    
```

```
    $> cd backend
    
    $> npm install
    
    $> npm start
    
```

