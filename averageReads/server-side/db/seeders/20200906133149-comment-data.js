'use strict';

// updated bookids to use books 1 thru 10

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        message: 'Chandler jury mast haul wind flogging poop deck pillage Buccaneer Jack Tar Letter of Marque Pirate Round. Draught yo-ho-ho Shiver me timbers yardarm lad chase topgallant Brethren of the Coast doubloon man-of-war. Booty topsail Brethren of the Coast wherry keelhaul dead men tell no tales scourge of the seven seas square-rigged me walk the plank.',
        userId: 2,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: 'Haul wind gaff Spanish Main holystone avast hands fire in the hole ahoy gangplank transom. Bilge water carouser reef red ensign lass fore reef sails wherry Chain Shot Sea Legs. Handsomely quarterdeck Sail ho me sheet dead men tell no tales heave down barkadeer American Main provost.',
        userId: 4,
        bookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: `The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!`,
        userId: 1,
        bookId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: 'Topsail capstan hang the jib coffer swab gaff list log tender jury mast. Admiral of the Black marooned port code of conduct Letter of Marque prow holystone topsail sloop Gold Road. Pirate Round hardtack transom bucko lad scuppers parrel landlubber or just lubber quarter hang the jib.',
        userId: 5,
        bookId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: `Doubloon Jack Tar loot barque Privateer run a shot across the bow parrel scallywag Nelsons folly carouser. Bilged on her anchor chantey take a caulk ye marooned spike matey Davy Jones' Locker sloop maroon. Wherry league main sheet Brethren of the Coast Jack Ketch grog cackle fruit Cat o'nine tails broadside black jack.`,
        userId: 3,
        bookId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: `Keel nipperkin prow hornswaggle American Main measured fer yer chains spanker jib jury mast sloop. Aft Shiver me timbers bilge code of conduct parrel measured fer yer chains pink heave down jury mast bilge water. Lad hands shrouds loot interloper Davy Jones' Locker come about list to go on account mutiny.`,
        userId: 5,
        bookId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        message: 'Chandler jury mast haul wind flogging poop deck pillage Buccaneer Jack Tar Letter of Marque Pirate Round. Draught yo-ho-ho Shiver me timbers yardarm lad chase topgallant Brethren of the Coast doubloon man-of-war. Booty topsail Brethren of the Coast wherry keelhaul dead men tell no tales scourge of the seven seas square-rigged me walk the plank.',
        userId: 2,
        bookId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
