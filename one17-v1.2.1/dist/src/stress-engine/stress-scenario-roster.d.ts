export interface StressScenarioSeed {
    modelType: 'LIQUIDITY' | 'CAPITAL_ADEQUACY' | 'REVENUE_SENSITIVITY' | 'COUNTERPARTY_DEFAULT' | 'PORTFOLIO_SHOCK' | 'REVERSE_STRESS';
    scenarioCode: string;
    scenarioLabel: string;
    parameters: Record<string, unknown>;
}
export declare const STRESS_SCENARIO_ROSTER: StressScenarioSeed[];
