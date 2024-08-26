import React from 'react';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  return (
	<div>
	  <h1>{t('Projects')}</h1>
	  <p>{t('ProjectsText')}</p>
	</div>
  );
}

export default Projects;
