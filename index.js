
// color definitions
const colors = {
	black:           [30, 39],
	red:             [31, 39],
	green:           [32, 39],
	yellow:          [33, 39],
	blue:            [34, 39],
	magenta:         [35, 39],
	cyan:            [36, 39],
	white:           [37, 39],
	gray:            [90, 39],
	grey:            [90, 39],

	brightRed:       [91, 39],
	brightGreen:     [92, 39],
	brightYellow:    [93, 39],
	brightBlue:      [94, 39],
	brightMagenta:   [95, 39],
	brightCyan:      [96, 39],
	brightWhite:     [97, 39],

	bgBlack:         [40, 49],
	bgRed:           [41, 49],
	bgGreen:         [42, 49],
	bgYellow:        [43, 49],
	bgBlue:          [44, 49],
	bgMagenta:       [45, 49],
	bgCyan:          [46, 49],
	bgWhite:         [47, 49],
	bgGray:          [100, 49],
	bgGrey:          [100, 49],

	bgBrightRed:     [101, 49],
	bgBrightGreen:   [102, 49],
	bgBrightYellow:  [103, 49],
	bgBrightBlue:    [104, 49],
	bgBrightMagenta: [105, 49],
	bgBrightCyan:    [106, 49],
	bgBrightWhite:   [107, 49],

	bold:            [1, 22],
	dim:             [2, 22],
	italic:          [3, 23],
	underline:       [4, 24],
	inverse:         [7, 27],
	hidden:          [8, 28],
	strikethrough:   [9, 29],
	strike:          [9, 29],
	reset:           [0, 0],

}; // compatible with https://github.com/Marak/colors.js

// check for tty and if terminal supports color
// adapted from https://github.com/chalk/supports-color/blob/main/index.js
const enabled = (('FORCE_COLOR' in process.env) || (process.argv.includes("--force-color")) || (!('NO_COLOR' in process.env) && !process.argv.includes("--no-color") && process.stdout.isTTY && (
	(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux|-256(color)?$/i.test(process.env.TERM)) ||
	('COLORTERM' in process.env) ||
	(('CI' in process.env) && (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE', 'DRONE'].some(sign => sign in process.env) || process.env.CI_NAME === 'codeship')) ||
	(('TEAMCITY_VERSION' in process.env) && (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(process.env.TEAMCITY_VERSION))) ||
	('TF_BUILD' in process.env && 'AGENT_NAME' in process.env)
)));

// extrend string prototype
if (enabled) Object.keys(colors).forEach(function(color){
	Object.defineProperty(String.prototype, color, {
		get() {
			return ('\u001b['+colors[color][0]+'m'+this+'\u001b['+colors[color][1]+'m');
		},
	});
});
