import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import { Edge } from 'vis-network';

const Graph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Crear un DataSet con los nodos
      const nodes = new DataSet([
        { id: 1, label: 'Nodo 1' },
        { id: 2, label: 'Nodo 2' },
        { id: 3, label: 'Nodo 3' },
      ]);

      // Crear un DataSet con las aristas (conexiones entre nodos)
      const edges = new DataSet<Edge>([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 1 },
      ]);

      // Configuración de opciones del grafo
      const options = {
        nodes: {
          shape: 'circle',
        },
        edges: {
          color: '#000000',
        },
        interaction: {
          zoomView: false, // Desactivar zoom del grafo
        },
      };

      // Crear una instancia de Network con el contenedor y los datos
      const network = new Network(
        containerRef.current,
        { nodes, edges },
        options
      );

      // Limpiar la instancia de Network al desmontar el componente
      return () => {
        network.destroy();
      };
    }
  }, []);

  return <div ref={containerRef} style={{ height: '500px' }} />;
};

export default Graph;
