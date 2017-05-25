import { MeetupPionerasPage } from './app.po';

describe('meetup-pioneras App', () => {
  let page: MeetupPionerasPage;

  beforeEach(() => {
    page = new MeetupPionerasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
