import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface SavingsCalculation {
  currentCost: number;
  potentialCost: number;
  savings: number;
  co2Reduction: number;
}

export enum HeatingType {
  GAS = 'Gasheizung',
  OIL = 'Ölheizung',
  ELECTRIC = 'Nachtspeicher'
}