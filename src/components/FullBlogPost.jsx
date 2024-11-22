import React from "react";
import { ArrowLeft } from "lucide-react";

const FullBlogPost = ({ post, onBack }) => {
  const content =
    post.id === "useState-useEffect" ? (
      <>
        <p className="mb-4">
          React Hooks han revolucionado la forma en que escribimos componentes
          funcionales. Dos de los hooks más fundamentales son{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useState
          </code>{" "}
          y{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useEffect
          </code>
          . Vamos a explorar cómo usarlos efectivamente.
        </p>

        <h2 className="text-gold-300 text-2xl font-bold mt-6 mb-4">useState</h2>
        <p className="mb-4">
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useState
          </code>{" "}
          nos permite añadir estado a nuestros componentes funcionales. Aquí
          tienes un ejemplo simple:
        </p>
        <pre className="bg-gold-800 text-gold-100 p-4 rounded-lg mb-4 overflow-x-auto">
          {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}`}
        </pre>
        <p className="mb-4">
          En este ejemplo,{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useState
          </code>{" "}
          nos da una variable de estado (
          <code className="bg-gold-800 text-gold-100 px-1 rounded">count</code>)
          y una función para actualizarla (
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            setCount
          </code>
          ).
        </p>

        <h2 className="text-gold-300 text-2xl font-bold mt-6 mb-4">
          useEffect
        </h2>
        <p className="mb-4">
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useEffect
          </code>{" "}
          nos permite realizar efectos secundarios en componentes funcionales.
          Es ideal para operaciones como suscripciones a datos o manipulación
          manual del DOM.
        </p>
        <pre className="bg-gold-800 text-gold-100 p-4 rounded-lg mb-4 overflow-x-auto">
          {`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Has hecho clic \${count} veces\`;
  }, [count]);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz clic aquí
      </button>
    </div>
  );
}`}
        </pre>
        <p className="mb-4">
          En este ejemplo,{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useEffect
          </code>{" "}
          se utiliza para actualizar el título del documento cada vez que{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">count</code>{" "}
          cambia.
        </p>

        <h2 className="text-gold-300 text-2xl font-bold mt-6 mb-4">
          Conclusión
        </h2>
        <p className="mb-4">
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useState
          </code>{" "}
          y{" "}
          <code className="bg-gold-800 text-gold-100 px-1 rounded">
            useEffect
          </code>{" "}
          son herramientas poderosas que te permiten añadir funcionalidad a tus
          componentes funcionales de React. Con práctica, te permitirán escribir
          componentes más limpios y mantenibles.
        </p>
      </>
    ) : (
      <p>Contenido del post no disponible.</p>
    );

  return (
    <article className="bg-secondary rounded-lg shadow-md p-6">
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-gold-300 hover:text-gold-100"
      >
        <ArrowLeft className="mr-2" size={20} />
        Volver
      </button>
      <h1 className="text-gold-300 text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between items-center mb-6">
        <span className="text-gold-300 text-sm">{post.date}</span>
        <span className="bg-gold-300 text-secondary px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      {content}
    </article>
  );
};

export default FullBlogPost;
