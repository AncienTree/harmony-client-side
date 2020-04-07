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

  public getStatus() {
    return this.scheduleStatus;
  }
}

interface IStatus {
  name: string;
  key: string;
}
