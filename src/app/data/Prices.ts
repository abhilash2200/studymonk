export type Stage = "stage4" | "stage5" | "stage6" | "stage7" | "stage8" | "stage9";

export interface PricingInfo {
    single: number;
    combo2: number;
    combo3: number;
    save2: string;
    save3: string;
}

const pricingData: Record<Stage, PricingInfo> = {
    stage4: {
        single: 2490,
        combo2: 4290,
        combo3: 5590,
        save2: "~14% Savings",
        save3: "~25% Savings",
    },
    stage5: {
        single: 2690,
        combo2: 4590,
        combo3: 6090,
        save2: "~15% Savings",
        save3: "~25% Savings",
    },
    stage6: {
        single: 2890,
        combo2: 4990,
        combo3: 6490,
        save2: "~14% Savings",
        save3: "~25% Savings",
    },
    stage7: {
        single: 3190,
        combo2: 5490,
        combo3: 7190,
        save2: "~14% Savings",
        save3: "~25% Savings",
    },
    stage8: {
        single: 3490,
        combo2: 5990,
        combo3: 7890,
        save2: "~14% Savings",
        save3: "~25% Savings",
    },
    stage9: {
        single: 3790,
        combo2: 6490,
        combo3: 8490,
        save2: "~15% Savings",
        save3: "~25% Savings",
    },
};

export default pricingData;