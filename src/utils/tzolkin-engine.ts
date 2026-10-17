export interface Kin {
  day: number; // 1-260
  nahual: number; // 1-20
  tone: number; // 1-13
  element: 'Water' | 'Air' | 'Earth' | 'Fire';
  direction: 'East' | 'North' | 'West' | 'South';
}

export interface TzolkinCorrelation {
  gmtCorrelation: '584283' | '584285';
  cycle: '260-day';
  explanation: string;
}

export class TzolkinEngine {
  private readonly correlations: TzolkinCorrelation[] = [
    {
      gmtCorrelation: '584283',
      cycle: '260-day',
      explanation: "Based on the GMT correlation 584283, used by most modern Tzolk'in calculators"
    },
    {
      gmtCorrelation: '584285',
      cycle: '260-day',
      explanation: "Based on the GMT correlation 584285, alternative system"
    }
  ];

  public getCurrentKin(date: Date = new Date()): Kin {
    return this.getKinForDate(date);
  }

  public getKinForDate(date: Date, gmtCorrelation: string = '584283'): Kin {
    const dayNumber = this.getDayNumber(date, gmtCorrelation);
    const nahual = this.getNahual(dayNumber);
    const tone = this.getTone(dayNumber);
    const element = this.getElement(nahual);
    const direction = this.getDirection(nahual);

    return { day: dayNumber, nahual, tone, element, direction };
  }

  private getDayNumber(date: Date, gmtCorrelation: string = '584283'): number {
    // Anchor: 2024-01-01 was Kin 72 (Traditional count)
    const baseDate = new Date(Date.UTC(2024, 0, 1));
    const targetUtc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const diffDays = Math.floor((targetUtc.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
    
    const offset = this.getOffsetForCorrelation(gmtCorrelation);
    let kin = ((72 + diffDays + offset) % 260);
    if (kin <= 0) kin += 260;
    return kin; // 1-260
  }

  private getOffsetForCorrelation(gmtCorrelation: string): number {
    return gmtCorrelation === '584283' ? 0 : 2;
  }

  private getNahual(day: number): number {
    return ((day - 1) % 20) + 1; // 1-20
  }

  private getTone(day: number): number {
    return ((day - 1) % 13) + 1; // 1-13
  }

  private getElement(nahual: number): 'Water' | 'Air' | 'Earth' | 'Fire' {
    const elements: ('Water' | 'Air' | 'Earth' | 'Fire')[] = ['Water', 'Air', 'Earth', 'Fire'];
    return elements[(nahual - 1) % 4];
  }

  private getDirection(nahual: number): 'East' | 'North' | 'West' | 'South' {
    const directions: ('East' | 'North' | 'West' | 'South')[] = ['East', 'North', 'West', 'South'];
    return directions[(nahual - 1) % 4];
  }

  public getKinByDate(date: Date, gmtCorrelation: string = '584283'): Kin {
    return this.getKinForDate(date, gmtCorrelation);
  }

  public getKinByCorrelation(date: Date, gmtCorrelation: string): Kin {
    return this.getKinForDate(date, gmtCorrelation);
  }

  public getCorrelationInfo(): TzolkinCorrelation {
    return this.correlations[0];
  }
}
