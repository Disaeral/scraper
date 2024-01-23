import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const [t, i18n] = useTranslation(['translation','about'])
    return (
        <div>
            {t("Test translation")}
            {t("About us", {ns: 'about'})}
        </div>
    );
};

export default AboutPage;