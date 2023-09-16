'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert('books', [
      {
        title: 'Negeri Para Bedebah',
        image: 'images/negeriparabedebah.png',
        author: 'Tere liye',
        description:
          'Kisah berawal dari Thomas sebagai seorang konsultan keuangan yang sangat terkenal. Keahlian Thomas dalam bidang pekerjaannya ini membuat dirinya bahkan sering diundang menjadi pembicara dalam berbagai kesempatan seperti talk show dan seminar hingga luar negeri. Thomas bisa dibilang merupakan salah satu figure paling berpengaruh dalam bidang perekonomian hingga mampu mendirikan firma konsultannya bernama Thomas & Co. Ketenaran Thomas membuat banyak orang ingin mengulik sisi dari dirinya yang amat misterius dan latar belakangnya yang gelap.',
        content: 'https://pdf.com/negeriparabedebah.pdf',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          'Rumah adalah di Mana Pun: Para Pejalan Perempuan Berbagi Cerita Perjalanan',
        image: 'images/rumahadadimana.png',
        author: 'Adinto F. Susanto',
        description:
          'Perempuan penyuka traveling adalah mereka yang sangat mandiri dan tangguh. Tempat-tempat yang didatangi biasanya anti-mainstream dan banyak mengandung cerita sejarah sebagai latarnya. Buku ini menyajikan kisah perjalanan 19 pejalan (traveler) perempuan yang telah melanglang buana ke seluruh penjuru negeri. Mereka berbagi rindu dan cerita cinta tentang tempat-tempat keren di Indonesia, yang mempunyai aroma rumah serta keeksotisan alam raya di dalamnya. Mulai dari catatan perjalanan Mehdia Nailufar bersantai di Kota Sabang, wisata mistis Citra Novitasari di Tana Toraja, serta 17 jurnal petualang wanita lainnya yang dikemas dengan gaya bahasa khas cewek banget.',
        content: 'https://pdf.com/rumahadadimana.pdf',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dongeng asal-usul binatang : 15 dongeng asal usul seruu!',
        image: 'images/dongeng asal usul binatang.png',
        author: 'Ade Cahya Satria',
        description:
          'Buku ini menceritakan tentang dongeng asal usul binatang, tentang bagaimana kucing selalu menjilati telapak kakinya, mengapa kelelawar keluar di malam hari, bagaimana gajah mendapatkan belalainya, mengapa lalat selalu mengganggu sapi, bagaimana burung pipit mendapatkan warna yang indah, mengapa petani takut dengan beruang, bagaimana ayam jago mendapat kan jenggernya?',
        content: 'https://pdf.com/dongengasalusulbinatang.pdf',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dark of the Moon : sebuah novel Dark Guardian',
        image: 'images/dark ofmoon.png',
        author: 'Rachel Hawthorne',
        description:
          'Cerita pada novel ini berpusat pada Brittany yang ingin membuktikan dirinya pada Dark Guardians. Namun, saat waktu pertamanya berubah wujud, ia tidak merasakan apa-apa. Ia tahu Connor yang dicintainya tak akan membalas cintanya apabila ia tak dapat berubah wujud. Brittany begitu ingin berubah menjadi serigala hingga ia sanggup melakukan segalanya, meskipun itu membahayakan kawanan dark guardian.',
        content: 'https://pdf.com/darkofmoon.pdf',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kitab epos mahabharata',
        image: 'images/mahabarata.png',
        author: 'C. Rajagopalachari',
        description:
          'Mahabharata lebih sekedar sebuah epik, melainkan roman, yang menceritakan kisah laki-laki dan perempuan heroik serta beberapa tokoh yang luar biasa. Karya ini adalah seni sastra yang mengandung rahasia hidup, filsafat relasi sosial dan etik, serta pemikiran penting tentang masalah-masalah manusia yang sulit dicari padanannya. Dalam epos kuno yang luar biasa dari tanah India ini, kita dapat menemukan kisah-kisah yang ilustratif dan ajaran-ajaran luhur, di samping kisah perjalanan hidup kelima Pandawa.',
        content: 'https://pdf.com/mahabarata.pdf',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The best of me = yang terbaik dariku',
        image: 'images/the best of me.png',
        author: 'Nicholas Sparks',
        description:
          'The best of me adalah kisah menyentuh tentang sepasang anak SMU di kota kecil. Sekarang, mereka telah dewasa dan mengambil jalan yang berbeda. Namun tak satupun dari mereka yang dapat melupakan cinta pertama itu. Pada suatu hari mereka kembali ke kampung halaman dan dipaksa untuk menghadapi pilihan yang telah mereka buat.',
        content: 'https://pdf.com/thebestofme.pdf',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kerajaan Gowa : masa demi masa penuh gejolak',
        image: 'images/Kerajaan gowa.png',
        author: 'H. L. Purnama',
        description:
          'Kerajaan Gowa adalah salah satu kerajaan Indonesia yang menjadi rebutan. Terletak di Sulawesi Selatan, kerajaan Gowa tidak hanya menghadapi ancaman dari luar, namun juga dari dalam kerajaannya itu sendiri. Perebutan tahta dan ketamakan mewarnai konflik di kerajaan Gowa.',
        content: 'https://pdf.com/Kerajaangowa.pdf',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Great at Work',
        image: 'images/coverGreatAtWork.jpg',
        author: 'Morten T. Hansen',
        description:
          'Kita sering mendengar istilah work smart, tetapi tidak banyak yang tahu maksud yang sebenarnya dari bekerja secara smart. Buku ini akan mengupas tuntas 7 Tips “Work Smarter” yang telah dibuktikan dari riset/survey dan penelitian Morten Hansen dan timnya. Buku ini juga dilengkapi dengan pemaparan statistik riset dan kisah-kisah inspiratif (contoh kasus) dari orang-orang yang telah mengadopsi salah satu atau beberapa daripada tips work smart ini, tujuannya agar pembaca lebih faham dan terutama mengaplikasikannya tip-tip tersebut dalam pekerjaan sehari-hari.',
        content: 'https://pdf.com/GreatAtWork.pdf',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Finding Ikigai in My Journey',
        image: 'images/coverFindingIkigai.jpg',
        author: 'Vita Wahid',
        description:
          'Ikigai adalah sebuah konsep hidup Jepang tentang menjalani kehidupan dengan penuh tujuan dan arti. Konsep tersebut beberapa tahun belakangan menjadi cukup popular di dunia. Sebagian orang mengartikan menjalani ikigai artinya bisa meraih kesuksesan dan kebahagiaan sejati dalam hidup. Padahal sebenarnya, ikigai sangat bisa dirasakan dalam keseharian tanpa perlu dikaitkan dengan sebuah pencapaian. Bahkan, dalam situasi hidup yang sedang tidak berpihak kepada kita, ikigai dapat membantu kita untuk tetap menjalani hidup dengan bermakna.',
        content: 'https://pdf.com/FindingIkigai.pdf',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Think and Grow Rich',
        image: 'coverThinkAndGrow.jpg',
        author: 'Napoleon Hill',
        description:
          'Buku ini berisi rahasia menghasilkan uang yang bisa mengubah hidup Anda. Think and Grow Rich, berdasarkan Hukum Kesuksesan penulis yang terkenal, mewakili kebijaksanaan suling dari orang-orang terkemuka yang kaya raya dan berprestasi. Formula ajaib Andrew Carnegie untuk sukses menjadi inspirasi langsung bagi buku ini. Carnegie mendemonstrasikan kekokohannya ketika kepelatihannya membawa keberuntungan bagi para pemuda yang telah dia ungkapkan rahasianya. Buku ini akan mengajari Anda rahasia itu--dan rahasia orang hebat lainnya seperti dia. Ini akan menunjukkan kepada Anda tidak hanya apa yang harus dilakukan tetapi juga bagaimana melakukannya. Jika Anda mempelajari dan menerapkan teknik-teknik dasar sederhana yang diungkapkan di sini, Anda akan menguasai rahasia kesuksesan sejati dan abadi--dan Anda mungkin mendapatkan apapun yang Anda inginkan dalam hidup!',
        content: 'https://pdf.com/ThinkAndGrow.pdf',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'PKI SIBAR',
        image: 'images/coverPkiSibar.jpg',
        author: 'Harry A. Poeze',
        description:
          'Pada tahun 1943 pertama kalinya pasukan penjajah Belanda mundur dari wilayah Indonesia atas diambil alihnya Indonesia oleh Jepang. Belanda masih bertekad untuk menaklukan Indonesia, mereka, utamanya sang birokrat Belanda Charles van der Plas pun mencari cara untuk diam-diam kembali menguasai Indonesia. Salah satunya dengan pembentukan persekutuan atas organisasi Serikat Indonesia Baroe di Australia.',
        content: 'https://pdf.com/PKISIBAR.pdf',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:
          'Di Balik Runtuhnya Majapahit Dan Berdirinya Kerajaan-Kerajaan Islam Di Jawa',
        image: 'images/coverDiBalikRuntuhnyaMajapahit.jpg',
        author: 'Drs. M. Rizal Qosim, M.Si',
        description:
          'Majapahit merupakan kerajaan Hindu terbesar yang pernah ada di bumi nusantara ini, dengan raja Hayam Wuruknya. Majapahit berhasil menguasai hampir seluruh negeri ini ditambah dengan beberapa wilayah di negara-negara tetangga. Hal tersebutlah yang menjadikan Majapahit pada kala itu sangat terkenal namanya. Majapahit berdiri ketika Singasari runtuh. Masa kejayaan pernah dirasakan Kerajaan Majapahit ketika Tribuana Tungga Dewi berkuasa dan masih berlanjut hingga masa pemerintahan Hayam Wuruk dengan dibantu mahapatih Gadjah Mada. Ketika Kusumawardhani naik tahta, kemelut di dalam kerajaan tidak dapat dikendalikan oleh sang raja. Pada akhirnya, Brawijaya V menorah sejarah sebagai raja terakhir Kerajaan Majapahit. Keruntuhan Kerajaan Majapahit ini mengundang sejumlah misteri.',
        content: 'https://pdf.com/DiBalikRuntuhnyaMajapahit.pdf',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('books', null, {});
  },
};
