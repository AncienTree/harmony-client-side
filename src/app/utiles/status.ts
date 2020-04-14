export class Status {
  private scheduleStatus: IStatus[] = [
    { name: 'wg. obecności', key: 'OBEC' },
    { name: 'wg. dyspozycyjności', key: 'DYSPO' },
    { name: 'wg. dostępności', key: 'DOSTP' },
    { name: 'wg. grafiku', key: 'GRAFIK' },
    { name: 'wg. zalogowania', key: 'LOGIN' },
    { name: 'wg. jitsi', key: 'JITSI' },
    { name: 'wg. dzwonienia', key: 'DZWON' }
  ];

  private recordStatus: IStatus[] = [
    { name: 'wg. obecności', key: 'OBECNOSC' },
    { name: 'wg. dyspozycyjności', key: 'DYSPOZYCYJNOSC' },
    { name: 'wg. dostępności', key: 'DOSTEPNOSC' },
    { name: 'wg. grafiku', key: 'GRAFIK' },
    { name: 'wg. zalogowania', key: 'ZALOGOWANIE' },
    { name: 'wg. jitsi', key: 'JITSI' },
    { name: 'wg. dzwonienia', key: 'DZWONIENIE' }
  ];

  public getStatus() {
    return this.scheduleStatus;
  }

  public getRecordStatus() {
    return this.recordStatus;
  }
}

interface IStatus {
  name: string;
  key: string;
}
