import { SoundPlayer } from "../sound-player";
import { SoundPlayerConsumer } from "../sound-player-consume";
jest.mock("../sound-player"); // SoundPlayer is now a mock constructor

let s: jest.Mock<SoundPlayer> = null;
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  s = SoundPlayer as jest.Mock<SoundPlayer>;
  s.mockClear();
});

it("We can check if the consumer called the class constructor", () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(s).toHaveBeenCalledTimes(1);
});

it("We can check if the consumer called a method on the class instance", () => {
  // Show that mockClear() is working:
  expect(s).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  // Constructor should have been called again:
  expect(s).toHaveBeenCalledTimes(1);

  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mockSoundPlayerInstance = s.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
 // expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
