/*const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
];*/

const aussieFacts = [
  "Australia is the sixth-largest country in the world by land area.",
  "Canberra is the capital city of Australia, not Sydney or Melbourne.",
  "Australia has more kangaroos than people.",
  "Over 85% of Australians live within 50km of the coast.",
  "The Great Barrier Reef is the world’s largest coral reef system.",
  "Australia is home to 21 of the world’s 25 most venomous snakes.",
  "Uluru (Ayers Rock) is one of the world’s largest monoliths.",
  "Australia has three time zones.",
  "The Sydney Opera House roof was inspired by orange slices.",
  "Vegemite is a popular yeast spread, but not loved by all.",
  "Australia was the second country in the world to give women the right to vote (1902).",
  "The Aboriginal culture is the world’s oldest continuous culture.",
  "Australia has more than 10,000 beaches — you could visit a new one every day for over 27 years.",
  "Tasmania has the world’s cleanest air.",
  "Koalas sleep around 18–22 hours a day.",
  "Australia has hosted the Olympics twice: Melbourne 1956 and Sydney 2000.",
  "Australia’s national sport is cricket, but AFL (Aussie Rules) is hugely popular.",
  "There are more sheep than people in Australia.",
  "The platypus is one of only two egg-laying mammals in the world.",
  "Christmas in Australia falls during summer.",
  "Australia invented Wi-Fi technology (through the CSIRO).",
  "The world’s longest fence, the Dingo Fence, is in Australia.",
  "The Outback covers over 70% of Australia's landmass.",
  "The Royal Flying Doctor Service is the world’s largest and most comprehensive aeromedical service.",
  "Australia has pink lakes, like Lake Hillier in Western Australia.",
  "The Emu and Kangaroo are on the coat of arms because they can't walk backwards.",
  "80% of Australian animals are unique to the continent.",
  "The Aussie accent evolved from British and Irish convicts.",
  "Melbourne was briefly the capital of Australia before Canberra was built.",
  "The Nullarbor Plain has the longest straight stretch of railway in the world.",
  "Australia has more camels than Egypt — and exports them!",
  "Australian money is made of plastic and is waterproof.",
  "Australia is home to the world’s largest cattle station: Anna Creek Station.",
  "Drop bears are a fictional creature used to scare tourists.",
  "Australia has the largest wild population of feral horses (brumbies).",
  "Perth is the most isolated capital city in the world.",
  "Over 300 languages are spoken in Australia, including 150 Indigenous languages.",
  "Australia is one of the sunniest places on Earth.",
  "The largest Greek population outside of Greece is in Melbourne.",
  "Australia is home to the world’s longest golf course: Nullarbor Links (1,365 km).",
  "January 26 is celebrated as Australia Day.",
  "Sydney’s Bondi Beach once had its sand dyed pink for a cancer awareness campaign.",
  "The ‘bush’ and ‘the outback’ are distinctly different terms in Aussie English.",
  "Australia’s national gemstone is the opal.",
  "Australians eat about 270 million meat pies per year.",
  "The echidna and platypus are monotremes — mammals that lay eggs.",
  "Australian rules football was invented in Melbourne in the 1850s.",
  "The didgeridoo is a traditional Aboriginal wind instrument.",
  "The name ‘Australia’ comes from the Latin ‘Terra Australis’ meaning ‘Southern Land’.",
  "In Western Australia, it's illegal to own more than 50kg of potatoes.",
  "Aussie slang includes terms like ‘arvo’ (afternoon), ‘bogan’, and ‘fair dinkum’."
];


const aussieFact = () => {
  const message = aussieFacts[Math.floor(Math.random() * aussieFacts.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  aussieFact
};