import React from 'react';

function DiwaliVisitList() {
  const relativeList = [
    { key: 'relativeListItem1', name: 'Uncle' },
    { key: 'relativeListItem2', name: 'Aunt' },
    { key: 'relativeListItem3', name: 'Cousin' },
    { key: 'relativeListItem4', name: 'Grandparents' },
    { key: 'relativeListItem5', name: 'Siblings' },
  ];

  return (
    <ol>
      {relativeList.map((relative) => (
        <li key={relative.key}>{relative.name}</li>
      ))}
    </ol>
  );
}

export default DiwaliVisitList;
