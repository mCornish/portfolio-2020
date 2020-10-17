import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default function Sidebar() {
  return S.list()
    .title('devStory')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🏠</strong>)
        .child(S.editor().schemaType('settings').documentId('main')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'settings'
      ),
    ]);
}
