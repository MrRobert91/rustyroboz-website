
export const posts = [
    {
        slug: "embeddings-nlp",
        title: "Entendiendo los Embeddings de Palabras en NLP",
        date: "2024-03-05",
        tags: ["NLP", "Deep Learning"],
        description: "Una introducción intuitiva a qué son los embeddings de palabras como Word2Vec y por qué revolucionaron el Procesamiento del Lenguaje Natural.",
        content: `
En el Procesamiento del Lenguaje Natural (NLP), uno de los mayores desafíos siempre ha sido cómo representar las palabras de una manera que las computadoras puedan entender. Una solución simple, como el one-hot encoding, falla estrepitosamente porque trata cada palabra como una entidad aislada, sin ninguna noción de similitud o relación. "Perro" y "gato" son tan diferentes como "perro" y "coche".

### La Revolución de los Vectores

Aquí es donde entran los **embeddings de palabras**. La idea es simple pero poderosa: representar cada palabra como un vector denso de números (por ejemplo, un vector de 300 dimensiones) en un espacio continuo.

La magia reside en que la posición de estos vectores en el espacio captura el significado semántico de las palabras. Palabras con significados similares, como "rey" y "reina", estarán cerca en este espacio vectorial.

Más aún, las relaciones entre palabras se pueden capturar con aritmética vectorial. El ejemplo clásico del paper original de Word2Vec es:

vec('rey') - vec('hombre') + vec('mujer') ≈ vec('reina')

Este enfoque, popularizado por algoritmos como **Word2Vec** y **GloVe**, permitió a los modelos de Deep Learning entender el lenguaje a un nivel mucho más profundo, sentando las bases para los transformadores y los grandes modelos de lenguaje (LLMs) que dominan el campo hoy en día.
    `
    },
    {
        slug: "explainable-ai",
        title: "The Future of Explainable AI",
        date: "October 24, 2024",
        tags: ["AI Ethics", "XAI"],
        description: "Why model interpretability is becoming more crucial than raw accuracy in enterprise applications.",
        content: "Explainable AI (XAI) is a set of processes and methods that allows human users to comprehend and trust the results and output created by machine learning algorithms."
    },
    {
        slug: "edge-transformers",
        title: "Optimizing Transformer Models for Edge Devices",
        date: "September 15, 2024",
        tags: ["Edge AI", "Optimization"],
        description: "A practical guide to quantization and pruning for running LLMs on consumer hardware.",
        content: "Deploying transformers on edge devices requires careful optimization to balance performance and resource constraints."
    }
];
