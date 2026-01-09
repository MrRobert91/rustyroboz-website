---
title: 'Sistema de Recomendación de Contenido'
date: '2024-01-15'
description: 'Implementación de un sistema de recomendación basado en filtrado colaborativo para una plataforma de streaming de vídeo.'
tags: ['Sistemas de Recomendación', 'Python', 'Surprise', 'Matrix Factorization']
githubUrl: '#'
---

## Descripción del Problema

Para mejorar la experiencia del usuario y aumentar el tiempo de visualización en una plataforma de streaming, es fundamental ofrecer recomendaciones de contenido personalizadas y relevantes para cada usuario.

## Enfoque Técnico

El sistema se basó en la técnica de **filtrado colaborativo** utilizando la librería `Surprise` de Python. Los pasos principales fueron:

1.  **Recopilación de Datos:** Se utilizó un conjunto de datos de interacciones usuario-ítem (películas vistas y calificadas).
2.  **Modelado:** Se implementó el algoritmo de **Factorización de Matrices** (específicamente SVD) para predecir las calificaciones que un usuario daría a los ítems que aún no ha visto.
3.  **Generación de Recomendaciones:** Para un usuario dado, el sistema predice las calificaciones de todas las películas no vistas y recomienda las N con las calificaciones predichas más altas.
4.  **Backend:** Se desarrolló una API simple con Flask para servir las recomendaciones.

## Resultados y Aprendizajes

El sistema fue capaz de generar recomendaciones personalizadas con un Error Cuadrático Medio (RMSE) bajo en el conjunto de prueba. Un aprendizaje clave fue la importancia de manejar la escasez de datos (usuarios con pocas calificaciones) y el problema del "arranque en frío" para nuevos usuarios.
