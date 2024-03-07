import React from 'react';

const VALID_TAGS = ['ul', 'ol'];

export default function List({
  as: Tag = 'ul',
  className = '',
  children,
  ...delegated
}) {
  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(
      `Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`
    );
  }

  return (
    <Tag
      {...delegated}
      className={className}
    >
      {children}
    </Tag>
  );
}
