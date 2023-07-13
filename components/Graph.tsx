import React, { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import { Edge } from 'vis-network';
import { motion } from 'framer-motion';

const Graph = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Crear un DataSet con los nodos
      const nodes = new DataSet([
        {
          id: 1,
          label: 'Skills',
          shape: 'image',
          image: '/Icons/skills.png',
        },
        {
          id: 2,
          label: 'Javascript',
          shape: 'image',
          image: '/Icons/javascript.png',
        },
        {
          id: 3,
          label: 'Typescript',
          shape: 'image',
          image: '/Icons/typescript.png',
        },
        {
          id: 4,
          label: 'HTML',
          shape: 'image',
          image: '/Icons/html.png',
        },
        {
          id: 5,
          label: 'CSS',
          shape: 'image',
          image: '/Icons/css.png',
        },
        {
          id: 6,
          label: 'Bootstrap',
          shape: 'image',
          image: '/Icons/bootstrap.png',
        },
        {
          id: 7,
          label: 'Tailwind',
          shape: 'image',
          image: '/Icons/tailwind.png',
        },
        {
          id: 8,
          label: 'ReactJs',
          shape: 'image',
          image: '/Icons/react.png',
        },
        {
          id: 9,
          label: 'NextJs',
          shape: 'image',
          image: '/Icons/nextjs.png',
        },
        {
          id: 10,
          label: 'Jira',
          shape: 'image',
          image: '/Icons/jira.png',
        },
        {
          id: 11,
          label: 'Trello',
          shape: 'image',
          image: '/Icons/trello.png',
        },
        {
          id: 12,
          label: 'Redux',
          shape: 'image',
          image: '/Icons/redux.png',
        },
        {
          id: 13,
          label: 'Git',
          shape: 'image',
          image: '/Icons/git.png',
        },
        {
          id: 14,
          label: 'GitLab',
          shape: 'image',
          image: '/Icons/gitlab.png',
        },
        {
          id: 15,
          label: 'GitHub',
          shape: 'image',
          image: '/Icons/github.png',
        },
        {
          id: 16,
          label: 'AdobeXd',
          shape: 'image',
          image: '/Icons/adobe.png',
        },
        {
          id: 17,
          label: 'Figma',
          shape: 'image',
          image: '/Icons/figma.png',
        },
      ]);
      // Crear un DataSet con las aristas (conexiones entre nodos)
      const edges = new DataSet<Edge>([
        { from: 1, to: 4 },
        { from: 4, to: 2 },
        { from: 2, to: 3 },
        { from: 1, to: 5 },
        { from: 5, to: 6 },
        { from: 6, to: 7 },
        { from: 1, to: 8 },
        { from: 9, to: 8 },
        { from: 9, to: 12 },
        { from: 1, to: 10 },
        { from: 11, to: 10 },
        { from: 1, to: 13 },
        { from: 15, to: 13 },
        { from: 14, to: 15 },
        { from: 1, to: 16 },
        { from: 17, to: 16 },
      ]);
      // Configuración de opciones del grafo
      const options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        nodes: {
          brokenImage: '/Icons/idea.png',
          chosen: false,
          font: {
            color: 'white',
            size: 30, // px
            bold: {
              color: 'black',
              face: 'courier new',
              vadjust: 0,
              mod: 'bold',
            },
          },
          labelHighlightBold: true,
          mass: 2,
          shape: 'circle',
          size: 35,
        },
        edges: {
          arrowStrikethrough: true,
          endPointOffset: {
            from: 100,
            to: 200,
          },
          chosen: false,
          color: {
            color: 'white',
            highlight: 'white',
            hover: 'white',
            inherit: false,
            opacity: 1.0,
          },
          dashes: true,
          hoverWidth: 1,
          label: undefined,
          labelHighlightBold: true,
          length: 1,
          physics: true,
          selectionWidth: 1,
          selfReferenceSize: 20,
          width: 2,
        },
        interaction: {
          zoomView: false,
          dragView: false,
          hover: true,
          selectConnectedEdges: false,
        },
        physics: {
          enabled: true,
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

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={containerRef}
      style={{ height: '80vh' }}
      className="w-full cursor-pointer"
    />
  );
};

export default Graph;
