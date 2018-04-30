
export interface InputSlot {
    name: string,
    value: string,
    key: string,
    id: string,
    alexaSkill: AlexaSkillSlot,
}

interface AlexaSkillSlot {
    confirmationStatus: string,
    name: string,
    resolutions: Resolutions,
    value: string,
}

interface Resolutions {
    resolutionsPerAuthority: [
        {
            authority: string,
            status: {
                code: string,
            },
            values: [
                {
                    value: {
                        id: string,
                        name: string,
                    },
                }
            ],
        }
    ],
}
