// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class weatherapi {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'weatherapi';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new weatherapi(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_weatherapi_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: weatherapi');
    let mw_myMiddleWare: Middleware = new Middleware(
      this.serviceName,
      'myMiddleWare',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.logic(bh, parentSpanInst);
          //appendnew_next_sd_HlLdBdHTseY7LUev
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_HlLdBdHTseY7LUev');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['myMiddleWare'] =
      mw_myMiddleWare;
    //appendnew_flow_weatherapi_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: weatherapi');

    this.app['post'](
      `${this.serviceBasePath}/getCityWeatherData`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'logging',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.queryConfiguration(bh, parentSpanInst);
          //appendnew_next_sd_XcNPMMm4IHtCSbBZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XcNPMMm4IHtCSbBZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'logging',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_weatherapi_HttpIn
  }
  //   service flows_weatherapi

  //appendnew_flow_weatherapi_start

  async queryConfiguration(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'queryConfiguration',
      parentSpanInst
    );
    try {
      bh.local.queryData = {
        q: bh.input.query.city,
        appid: process.env.WEATHER_API_KEY,
        units: 'metric',
      };
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.openWeatherapi(bh, parentSpanInst);
      //appendnew_next_queryConfiguration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CNM7bzebRG0k4u0N',
        spanInst,
        'queryConfiguration'
      );
    }
  }

  async openWeatherapi(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: process.env.WEATHER_API,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: bh.local.queryData,
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.resultConfiguration(bh, parentSpanInst);
      //appendnew_next_openWeatherapi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OJ3aULIxAs4CISMw');
    }
  }

  async resultConfiguration(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'resultConfiguration',
      parentSpanInst
    );
    try {
      bh.local.data = bh.local.result.payload;
      this.tracerService.sendData(spanInst, bh);
      await this.weatherData(bh, parentSpanInst);
      //appendnew_next_resultConfiguration
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VOTDMtonBamD4JqW',
        spanInst,
        'resultConfiguration'
      );
    }
  }

  async weatherData(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.data);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7v8ia5rmoG2CUgu6');
    }
  }

  async weatherapiError(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'weatherapiError',
      parentSpanInst
    );
    try {
      let logobj: any = bh.error;
      if (logobj instanceof Error) {
        log.error(logobj);
      } else {
        log.error(safeStringify.default(logobj));
      }
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_weatherapiError
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_67t17x9DjcfoAUQc',
        spanInst,
        'weatherapiError'
      );
    }
  }

  async logic(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('logic', parentSpanInst);
    try {
      console.log(
        `${new Date().toISOString()} - ${bh.input.method} - ${bh.input.path}`
      );

      let auth = bh.input.headers.authorization;

      if (auth && auth === `${process.env.API_KEY}`) {
        bh.local.auth = true;
      } else {
        bh.local.auth = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.authCheck(bh, parentSpanInst);
      //appendnew_next_logic
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ctx03tfA4NtDTVvS',
        spanInst,
        'logic'
      );
    }
  }

  async authCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('authCheck', parentSpanInst);
    try {
      if (
        this.sdService.operators['true'](
          bh.local.auth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BuJcPHJ4jX6EReKF(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.auth,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XCX6mYRSRTc4aUsu(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eID2BAvQcCbEq2e4',
        spanInst,
        'authCheck'
      );
    }
  }

  async sd_BuJcPHJ4jX6EReKF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BuJcPHJ4jX6EReKF',
      parentSpanInst
    );
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BuJcPHJ4jX6EReKF',
        spanInst,
        'sd_BuJcPHJ4jX6EReKF'
      );
    }
  }

  async sd_XCX6mYRSRTc4aUsu(bh, parentSpanInst) {
    try {
      bh.web.res.status(401).send('unauthorised');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XCX6mYRSRTc4aUsu');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_f0qnUKHJNRSg8QBo(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_f0qnUKHJNRSg8QBo(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_67t17x9DjcfoAUQc'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.weatherapiError(bh, parentSpanInst);
    //appendnew_next_sd_f0qnUKHJNRSg8QBo
    return true;
  }
  //appendnew_flow_weatherapi_Catch
}
