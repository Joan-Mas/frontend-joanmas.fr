// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: [], // Ajoutez les domaines d'où proviendront vos images
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp4|webm)$/i, // Ajoutez tous les formats vidéo que vous utilisez
//       use: [
//         {
//           loader: 'url-loader', // Utilisez 'file-loader' si vous l'avez choisi
//           options: {
//             limit: 8192, // Limite pour l'intégration des petits fichiers directement dans le bundle
//             publicPath: '/_next/static/videos', // Chemin public pour les vidéos
//             outputPath: 'static/videos', // Chemin dans le build
//             name: '[name].[hash].[ext]',
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [], // Add the domains where your images come from
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mp4|webm)$/i, // Add all video formats you use
        use: [
          {
            loader: 'url-loader', // Use 'file-loader' if that's your choice
            options: {
              limit: 8192, // Limit for embedding small files directly into the bundle
              publicPath: '/_next/static/videos', // Public path for videos
              outputPath: 'static/videos', // Path in the build
              name: '[name].[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.pdf$/i, // Add support for PDF files
        use: [
          {
            loader: 'url-loader', // Use 'file-loader' if that's your choice
            options: {
              limit: 8192, // Limit for embedding small files directly into the bundle
              publicPath: '/_next/static/pdfs', // Public path for PDFs
              outputPath: 'static/pdfs', // Path in the build
              name: '[name].[hash].[ext]',
            },
          },
        ],
      }
    );

    return config;
  },
};
