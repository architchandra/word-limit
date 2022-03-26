function Results({ text }) {
  function getCharCount(text) {
    return text.length;
  }
  function getWordCount(text) {
    return text.split(/\W/).filter(word => !!word).length;
  }

  const resultsList = [{
    label: 'words',
    count: getWordCount(text),
  },{
    label: 'characters',
    count: getCharCount(text),
  }];
  
  return (
    <div class="flex mb-6 p-4 rounded-md border border-dark-grey bg-light-grey">
      {resultsList.map((result, index) => 
        <p class="mr-4 pr-4 last:mr-0 last:pr-0 border-r last:border-none border-dark-grey text-sm" key={index}>
          <span class="block text-3xl">
            {result.count}
          </span>
          <span class="uppercase">
            {result.label}
          </span>
        </p>
      )}
    </div>
  );
}



export default Results;
