module.exports = {
  reactStrictMode: true,
  images: {
    domains: [], // Ajoutez les domaines d'où proviendront vos images
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i, // Ajoutez tous les formats vidéo que vous utilisez
      use: [
        {
          loader: 'url-loader', // Utilisez 'file-loader' si vous l'avez choisi
          options: {
            limit: 8192, // Limite pour l'intégration des petits fichiers directement dans le bundle
            publicPath: '/_next/static/videos', // Chemin public pour les vidéos
            outputPath: 'static/videos', // Chemin dans le build
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

